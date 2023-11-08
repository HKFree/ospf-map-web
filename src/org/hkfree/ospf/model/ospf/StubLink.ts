/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Spoj ke koncovému uživateli
 * @author Jan Schovánek
 * @class
 */
export class StubLink {
    /*private*/ linkID: string | null;

    /*private*/ mask: number;

    /*private*/ cost: number;

    public getLinkID(): string | null {
        return this.linkID;
    }

    public setLinkID(linkID: string) {
        this.linkID = linkID;
    }

    public getMask(): number {
        return this.mask;
    }

    public setMask(mask: number) {
        this.mask = mask;
    }

    public getCost(): number {
        return this.cost;
    }

    public setCost(cost: number) {
        this.cost = cost;
    }

    /**
     * 
     * @return {string}
     */
    public toString(): string {
        return "StubLink [linkID=" + this.linkID + ", mask=" + this.mask + ", cost=" + this.cost + "]";
    }

    constructor() {
        this.linkID = null;
        this.mask = -1;
        this.cost = -1;
    }
}



