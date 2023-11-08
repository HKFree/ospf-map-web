/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Třída představující účastněný router ve spoji a parametry této účasti
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @class
 */
export class OspfLinkData {
    /*private*/ router: Router | null;

    /*private*/ interfaceIp: string;

    /*private*/ costIPv4: number;

    /*private*/ costIPv6: number;

    public constructor() {
        this.router = null;
        this.interfaceIp = "";
        this.costIPv4 = -1;
        this.costIPv6 = -1;
    }

    public getRouter(): Router | null {
        return this.router;
    }

    public setRouter(router: Router) {
        this.router = router;
    }

    public getInterfaceIp(): string {
        return this.interfaceIp;
    }

    public setInterfaceIp(interfaceIp: string) {
        this.interfaceIp = interfaceIp;
    }

    public getCostIPv4(): number {
        return this.costIPv4;
    }

    public setCostIPv4(costIPv4: number) {
        this.costIPv4 = costIPv4;
    }

    public getCostIPv6(): number {
        return this.costIPv6;
    }

    public setCostIPv6(costIPv6: number) {
        this.costIPv6 = costIPv6;
    }
}



import { Router } from './Router';

