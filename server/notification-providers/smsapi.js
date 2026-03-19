const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class SmsApi extends NotificationProvider {
    name = "SmsApi";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        const okMsg = "Sent Successfully.";
        const url = "https://api.smsapi.pl/sms.do";

        try {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${notification.smsapiToken}`,
                },
            };
            config = this.getAxiosConfigWithProxy(config);
            let data = {
                encoding: "utf-8",
                format: "json",
                message: msg,
                from: notification.smsapiSenderName,
                normalize: notification.smsapiNormalize ? "1" : "0"
            };

            if (notification.smsapiRecipientType === "group") {
                data.group = notification.smsapiGroupName;
            } else {
                data.to = notification.smsapiPhoneNumber;
            }

            let resp = await axios.post(url, data, config);

            if (resp.data.error) {
                let error = `smsapi.pl API returned an error: ${resp.data.message}`;
                this.throwGeneralAxiosError(error);
            }

            return okMsg;
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }
}

module.exports = SmsApi;
