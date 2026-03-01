import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PilotRequest {
    name: string;
    email: string;
    company: string;
    message: string;
}
export interface backendInterface {
    getAllPilotRequests(): Promise<Array<PilotRequest>>;
    getDownloadCount(): Promise<bigint>;
    incrementDownloadCount(): Promise<void>;
    submitPilotRequest(name: string, company: string, email: string, message: string): Promise<void>;
}
