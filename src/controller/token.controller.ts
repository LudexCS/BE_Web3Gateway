import {findTokenAddress} from "../service/token.service";

export function getTokenAddressControl() {
    return findTokenAddress();
}