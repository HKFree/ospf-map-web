/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Konstruktor
 * @param {number} cost
 * @param {string} linkID
 * @class
 * @author Jakub Menzel
 */
export class EdgeOfSPT {
    /*private*/ cost: number;

    /*private*/ linkID: string;

    public constructor(cost: number, linkID: string) {
        this.cost = 0;
        this.linkID = "";
        this.cost = cost;
        this.linkID = linkID;
    }

    /**
     * Vrací cenu
     * @return {number} int
     */
    public getCost(): number {
        return this.cost;
    }

    /**
     * Nastavuje cenu
     * @param {number} cost
     */
    public setCost(cost: number) {
        this.cost = cost;
    }

    /**
     * Vrací linkId
     * @return {string} linkId
     */
    public getLinkID(): string {
        return this.linkID;
    }

    /**
     * nastavuje linkId
     * @param {string} linkID
     */
    public setLinkID(linkID: string) {
        this.linkID = linkID;
    }
}



