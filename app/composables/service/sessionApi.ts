import { useApiInterceptor } from "../api/useApiInterceptor";

export type EnterSessionRequest = {
    force_new?: boolean;
    current_path_version_id?: number;
    current_context_index?: number;
    current_index_no?: number;
    current_group_id?: number;
    current_scene_id?: string;
    current_boss_fish_type_id?: number | null;
    pending_next_context_index?: number | null;
    pending_next_scene_index?: string;
    boss_scene_active?: boolean;
    boss_scene_lock_id?: string;
    spawn_cursor?: number;
    total_elapsed_seconds?: string;
    context_started_at?: string;
    context_expires_at?: string;
    client_snapshot_at?: string;
    runtime_state_json?: Record<string, unknown>;
    device_meta_json?: Record<string, unknown>;
    expire_in_seconds?: number;
}

export type SessionPayload = {
    id: number;
    snapshot_version: number;
    current_path_verson_id: number | null;
    current_scene_id: string;
    current_group_id: number | null;
    current_context_id: number | null;
    current_context_no: number | null;
    current_boss_active: boolean;
    boss_scene_active: boolean;
    boss_scene_lock_id: boolean;
    spawn_cursor: number;
    pending_next_context_id_index: number | null;
    pending_next_scene_id: string;
    total_elpsend_seconds: string;
    runtime_state_json: Record<string, unknown>
}

export interface EnterSessionResponse {
    success: boolean;
    message: string;
    status_code: number;
    data: EnterSession;
}

export interface EnterSession {
    created: boolean;
    session: SessionPayload;
}

export interface SnapshotResponse {
    success: boolean;
    message: string;
    status_code: number;
    data: Snapshot
}

export interface Snapshot {
    seesion: SessionPayload;
}

export async function enterGameSession(payload: Record<string, unknown>) {
    return useApiInterceptor<EnterSessionRequest>(
        "/game-sessions/enter",
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    )
}

export async function saveGameSessionSnapshot(sessionId: number, payload: Record<string, unknown>) {
    return useApiInterceptor<SnapshotResponse>(
        `/game-sessions/${sessionId}/snapshot`,
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    )
}

export async function endGameSession(sessionId: number, payload: Record<string, unknown>) {
    return useApiInterceptor<SessionPayload>(
        `/game-sessions/${sessionId}/end`,
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    )
}

