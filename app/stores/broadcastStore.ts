import { defineStore } from "pinia";
import { ref, computed } from "vue";

import {
  createWebSocketConnection,
  type BroadcastState, type BroadcastResponse
} from "~/types/websocket/websocketType";


export const useBroadcastStore = defineStore("broadcast", {
  state: () => ({
    broadcastState: {
      broadcastResponse: {
        topic: "",
        data: {

        },
      },
    } as BroadcastState,
    error: null as string | null,
    memberStore: useMemberStore()
  }),

  actions: {
    async connectWebSocket() {
      this.error = null;
      try {
        const ws = await createWebSocketConnection();

        ws.onmessage = (event: MessageEvent) => {
          try {
            const parsedData: BroadcastResponse = JSON.parse(event.data);

            switch (parsedData.topic) {
              case "front.coin.updated":
                if (parsedData.data.member_coin){
                  this.memberStore.setCoins(parsedData.data.member_coin?.coin_amount)
                }
                // this.memberStore.setCoins("99999999")
              break;

              case "user_notification":
                if (parsedData.data.user_notifications) {
                  // console.log("notificationd ==================================")
                  // this.new_notify += 1;
                  // sonnerToast(
                  //   "",
                  //   parsedData.data.user_notifications[0].description,
                  //   "info"
                  // );
                }
                break;
              default:
                console.warn("Unhandled topic:", parsedData.topic);
                break;
            }
          } catch (error) {
            this.error = "Error parsing WebSocket message";
          }
        };

        ws.onclose = () => {
          setTimeout(() => this.connectWebSocket(), 5000);
        };
      } catch (error) {
        this.error = "Error connecting to WebSocket";
      }
    },
  },
});