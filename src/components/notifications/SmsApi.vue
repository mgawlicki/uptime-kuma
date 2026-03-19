<template>
    <div class="mb-3">
        <label for="smsapi-key" class="form-label">{{ $t("smsapiToken") }}</label>
        <HiddenInput
            id="smsapi-key"
            v-model="$parent.notification.smsapiToken"
            :required="true"
            autocomplete="new-password"
        ></HiddenInput>
    </div>
    <div class="mb-3">
        <label for="smsapi-recipient-type" class="form-label">{{ $t("smsapiRecipientType") }}</label>
        <select id="smsapi-recipient-type" v-model="$parent.notification.smsapiRecipientType" class="form-select">
            <option value="phone">{{ $t("smsapiRecipientTypePhone") }}</option>
            <option value="group">{{ $t("smsapiRecipientTypeGroup") }}</option>
        </select>
    </div>
    <div v-if="$parent.notification.smsapiRecipientType !== 'group'" class="mb-3">
        <label for="smsapi-phone-number" class="form-label">{{ $t("smsapiPhoneNumber") }}</label>
        <input
            id="smsapi-phone-number"
            v-model="$parent.notification.smsapiPhoneNumber"
            type="text"
            class="form-control"
            required        />
    </div>
    <div v-if="$parent.notification.smsapiRecipientType === 'group'" class="mb-3">
        <label for="smsapi-group-name" class="form-label">{{ $t("smsapiGroupName") }}</label>
        <input
            id="smsapi-group-name"
            v-model="$parent.notification.smsapiGroupName"
            type="text"
            class="form-control"
            required
        />
        <div class="form-text">{{ $t("smsapiGroupNameHelptext") }}</div>
    </div>
    <div class="mb-3">
        <label for="smsapi-sender-name" class="form-label">{{ $t("smsapiSenderName") }}</label>
        <input
            id="smsapi-sender-name"
            v-model="$parent.notification.smsapiSenderName"
            type="text"
            minlength="3"
            maxlength="11"
            class="form-control"
        />
    </div>
    <div class="mb-3 form-check form-switch">
        <label for="smsapi-normalize" class="form-label">{{ $t("smsapiNormalize") }}</label>
        <input
            id="smsapi-normalize"
            v-model="$parent.notification.smsapiNormalize"
            type="checkbox"
            class="form-check-input"
        />
        <div class="form-text">{{ $t("smsapiNormalizeHelpText") }}</div>

    </div>
</template>

<script>
import HiddenInput from "../HiddenInput.vue";

export default {
    components: {
        HiddenInput,
    },
};
</script>
