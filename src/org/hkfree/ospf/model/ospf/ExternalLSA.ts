/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Prepravka pro externi LSA, který je propagován routerem
 * @author Jan Schovánek
 * @class
 */
export class ExternalLSA {
    /*private*/ network: string | null;

    /*private*/ mask: number;

    /*private*/ metricType: number;

    /*private*/ cost: number;

    public getNetwork(): string {
        return <string>this.network;
    }

    public setNetwork(network: string) {
        this.network = network;
    }

    public getMask(): number {
        return this.mask;
    }

    public setMask(mask: number) {
        this.mask = mask;
    }

    public getMetricType(): number {
        return this.metricType;
    }

    public setMetricType(metricType: number) {
        this.metricType = metricType;
    }

    public getCost(): number {
        return this.cost;
    }

    public setCost(cost: number) {
        this.cost = cost;
    }

    constructor() {
        this.network = null;
        this.mask = -1;
        this.metricType = -1;
        this.cost = -1;
    }
}




