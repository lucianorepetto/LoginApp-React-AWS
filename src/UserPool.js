import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_psRFbjXeI",
    ClientId: "498p7ulbeou9fqesr5nvkf2140"
}

export default new CognitoUserPool(poolData)