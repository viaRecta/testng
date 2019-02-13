export class viasResponse {
    sid:string;
    pid:number;
    aid:number;
    return_action:string;
    error:string[];
    perm:string;
    permission: boolean[];
    data:object;
    constructor(sid:string, pid:number, aid:number, return_action:string, error:string[], perm:string, data:object){
        this.sid=sid;
        this.pid=pid;
        this.aid=aid;
        this.return_action=return_action;
        this.error=error;
        this.data=data;
        
        // 3ffffffffffff  => 49 * 1
        /** @todo  permission islemleri */
        var x = parseInt(perm, 16).toString().split('');
        // alert(x);
    }
}