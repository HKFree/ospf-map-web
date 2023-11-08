/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { ExternalLSA } from '../../model/ospf/ExternalLSA';
import { Router } from '../../model/ospf/Router';
import { StubLink } from '../../model/ospf/StubLink';
import {javaemul} from "j4ts";
import IntegerHelper = javaemul.internal.IntegerHelper;

/**
 * Třída obsluhující operace s IP (výpočet adresy sítě, broadcastu, převod masky mezi tvary)
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @class
 */
export class IpCalculator {
    static ZEROS: string = "00000000";

    static ONES: string = "11111111";

    /**
     * Vrací spočtenou adresu sítě
     * @return {string} address
     * @param {string} ip
     * @param {number} subnetMask
     */
    public static getNetworkAddress(ip: string, subnetMask: number): string | null {
        if (ip == null || /* isEmpty */(ip.length === 0)){
            return null;
        }
        let na: string;
        let ip1: number;
        let ip2: number;
        let ip3: number;
        let ip4: number;
        const octets1: string[] = ip.split(".");
        ip1 = IntegerHelper.valueOf(octets1[0]);
        ip2 = IntegerHelper.valueOf(octets1[1]);
        ip3 = IntegerHelper.valueOf(octets1[2]);
        ip4 = IntegerHelper.valueOf(octets1[3]);
        if (subnetMask <= 8){
            const maskedBits: number = subnetMask;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip1));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            na = IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ZEROS).substring(0, 8), 2) + ".0.0.0";
        } else if (subnetMask <= 16){
            const maskedBits: number = subnetMask - 8;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip2));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            na = ip1 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ZEROS).substring(0, 8), 2) + ".0.0";
        } else if (subnetMask <= 24){
            const maskedBits: number = subnetMask - 16;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip3));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            na = ip1 + "." + ip2 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ZEROS).substring(0, 8), 2) + ".0";
        } else {
            const maskedBits: number = subnetMask - 24;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip4));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            na = ip1 + "." + ip2 + "." + ip3 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ZEROS).substring(0, 8), 2);
        }
        return na;
    }

    /**
     * Vrací spočtenou adresu broadcastu
     * @return {string} address
     * @param {string} ip
     * @param {number} subnetMask
     */
    public static getBroadcastAddress(ip: string, subnetMask: number): string | null {
        if (ip == null || /* isEmpty */(ip.length === 0)){
            return null;
        }
        let ba: string;
        let ip1: number;
        let ip2: number;
        let ip3: number;
        let ip4: number;
        const octets1: string[] = ip.split(".");
        ip1 = IntegerHelper.valueOf(octets1[0]);
        ip2 = IntegerHelper.valueOf(octets1[1]);
        ip3 = IntegerHelper.valueOf(octets1[2]);
        ip4 = IntegerHelper.valueOf(octets1[3]);
        if (subnetMask <= 8){
            const maskedBits: number = subnetMask;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip1));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            ba = IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ONES).substring(0, 8), 2) + ".255.255.255";
        } else if (subnetMask <= 16){
            const maskedBits: number = subnetMask - 8;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip2));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            ba = ip1 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ONES).substring(0, 8), 2) + ".255.255";
        } else if (subnetMask <= 24){
            const maskedBits: number = subnetMask - 16;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip3));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            ba = ip1 + "." + ip2 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ONES).substring(0, 8), 2) + ".255";
        } else {
            const maskedBits: number = subnetMask - 24;
            let ipB: string = (IpCalculator.ZEROS + IntegerHelper.toBinaryString(ip4));
            ipB = ipB.substring(ipB.length - 8, ipB.length);
            ba = ip1 + "." + ip2 + "." + ip3 + "." + IntegerHelper.valueOf((ipB.substring(0, maskedBits) + IpCalculator.ONES).substring(0, 8), 2);
        }
        return ba;
    }

    /**
     * Spočte a vrátí masku ve tvaru čísla
     * @param {string} mask maska ve tvaru např. 255.255.255.255
     * @return {number} masku ve tvaru např. 24
     */
    public static getMask(mask: string): number {
        if (mask == null || /* isEmpty */(mask.length === 0)){
            return -1;
        }
        let m1: number;
        let m2: number;
        let m3: number;
        let m4: number;
        const octets1: string[] = mask.split(".");
        m1 = IntegerHelper.valueOf(octets1[0]);
        m2 = IntegerHelper.valueOf(octets1[1]);
        m3 = IntegerHelper.valueOf(octets1[2]);
        m4 = IntegerHelper.valueOf(octets1[3]);
        let s: string = IntegerHelper.toBinaryString(m1) + IntegerHelper.toBinaryString(m2) + IntegerHelper.toBinaryString(m3) + IntegerHelper.toBinaryString(m4);
        s = /* replaceAll */s.replace(new RegExp("0", 'g'),"");
        return s.length;
    }

    /**
     * Zjisti zda podsit s maskou obsahuje hledanou sit
     * @param {string} network sit
     * @param {number} mask maska site
     * @param {string} search hledany retezec
     * @return {boolean}
     */
    public static networkContains(network: string, mask: number, search: string): boolean {
        if (/* contains */(network.indexOf(":") != -1)){
            return IpCalculator.networkContainsIPv6(network, mask, search);
        } else {
            return IpCalculator.networkContainsIPv4(network, mask, search);
        }
    }

    /**
     * Zjisti zda podsit IPv4 s maskou obsahuje hledanou sit
     * @param {string} network sit
     * @param {number} mask maska site
     * @param {string} search hledany retezec
     * @return
     * @return {boolean}
     * @private
     */
    /*private*/ static networkContainsIPv4(network: string, mask: number, search: string): boolean {
        const na: string | null = IpCalculator.getNetworkAddress(network, mask);
        const ba: string | null = IpCalculator.getBroadcastAddress(network, mask);
        if (na == null || ba == null){
            return false;
        }
        const sas: string[] = search.split(".");
        const nas: string[] = na.split(".");
        const bas: string[] = ba.split(".");
        if (sas.length !== 4){
            return false;
        }
        for(let i: number = 0; i < 4; i++) {{
            try {
                if (!IpCalculator.isBetweenInclude(IntegerHelper.valueOf(nas[i]), IntegerHelper.valueOf(bas[i]), IntegerHelper.valueOf(sas[i]))){
                    return false;
                }
            } catch(ex) {
                console.error(ex);
            }
        };}
        return true;
    }

    /**
     * Zjisti zda podsit IPv6 s maskou obsahuje hledanou sit
     * @param {string} network sit
     * @param {number} mask maska site
     * @param {string} search hledany retezec
     * @return {boolean}
     * @private
     */
    /*private*/ static networkContainsIPv6(network: string, mask: number, search: string): boolean {
        return false;
    }

    /**
     * Vrací příznak zda num je mezi min a max včetně
     * @param {number} min min číslo
     * @param {number} max max číslo
     * @param {number} num číslo porovnávané
     * @return {boolean} pokud num je mezi min/max - true, jinak false
     * @private
     */
    /*private*/ static isBetweenInclude(min: number, max: number, num: number): boolean {
        if (num >= min && num <= max){
            return true;
        }
        return false;
    }

    /**
     * Vrací ip adresu routeru v klasickém tvaru
     * @param {string} ipArpa ip adresa rotueru v převráceném tvaru končící ".in-addr.arpa."
     * @return {string} klasický tvar ip adresy
     */
    public static getIpFromIpArpa(ipArpa: string): string {
        let result: string = "";
        const arpas: string[] = ipArpa.substring(0, ipArpa.indexOf(".in-addr.arpa.")).split(".");
        for(let i: number = 0; i < arpas.length; i++) {{
            result += arpas[arpas.length - i - 1] + ".";
        };}
        return result.substring(0, result.length - 1);
    }

    /**
     * Vraci true, pokud router prograuje danou podsit
     * @param {Router} r router
     * @param {string} ip podsit
     * @return
     * @return {boolean}
     */
    public static containsRouterSubnet(r: Router, ip: string): boolean {
        ip = ip.toUpperCase();
        for(let index=r.getStubs().iterator();index.hasNext();) {
            let sl = index.next();
            {
                if (sl.getMask() === 32){
                    continue;
                }
                if (/* contains */sl.getLinkID() != null && ((sl.getLinkID()?.toUpperCase().indexOf(ip) != -1) || IpCalculator.networkContains(sl.getLinkID() ?? '', sl.getMask(), ip))) {
                    return true;
                }
            }
        }
        for(let index=r.getExternalLsa().iterator();index.hasNext();) {
            let el = index.next();
            {
                if (el.getMask() === 32){
                    continue;
                }
                if (/* contains */(el.getNetwork().toUpperCase().indexOf(ip) != -1) || IpCalculator.networkContains(el.getNetwork(), el.getMask(), ip)){
                    return true;
                }
            }
        }
        return false;
    }
}



