import request from "@/api/api-config";
export default {
    login(req: any){
        return request.post("/v1/auth/login", req);
    },
    registry(req: any){
        return request.post("/v1/auth/registry", req);
    }
}