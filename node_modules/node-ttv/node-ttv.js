const {apiPost, apiGet, apiDelete, apiPatch, apiPut} = require("./util/api");
const {Post} = require("./util/web-requests/post");

exports.Twitch =  {

    getRefreshToken: async (AUTH_CODE, CLIENT_ID, SECRET) => {
        var url = "/oauth2/token?grant_type=authorization_code&redirect_uri=http://localhost/"
            + "&client_id=" + CLIENT_ID
            + "&client_secret=" + SECRET
            + "&code=" + AUTH_CODE;
        try {
            const res = await Post("id.twitch.tv",
            url);
            const token = JSON.parse(res).refresh_token;
            console.log(token);
            return token;
        } catch (err) {
            console.log(err);
        }
    },

    init: async (REFRESH_TOKEN, CLIENT_ID, SECRET) => {
        global.REFRESH_TOKEN = REFRESH_TOKEN;
        global.CLIENT_ID = CLIENT_ID;
        global.SECRET = SECRET;
    },
    
    ads: {
        startCommercial: async (bodyParams) => {
            return apiPost("/helix/channels/commercial", {}, bodyParams);
        }
    },

    analytics: {
        getExtensionAnalytics: async (queryParams) => {
            return apiGet("/helix/analytics/extensions", queryParams);
        },
        getGameAnalytics: async (queryParams) => {
            return apiGet("/helix/analytics/games", queryParams);
        }
    },

    bits: {
        getBitsLeaderboard: async (queryParams) => {
            return apiGet("/helix/bits/leaderboard", queryParams);
        },
        getCheermotes: async (queryParams) => {
            return apiGet("/helix/bits/cheermotes", queryParams);
        },
        getExtensionTransactions: async (queryParams) => {
            return apiGet("/helix/extensions/transactions", queryParams);
        }
    },

    channelPoints: {
        createCustomRewards: async (queryParams, bodyParams) => {
            return apiPost("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        deleteCustomReward: async (queryParams) => {
            return apiDelete("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomReward: async (queryParams) => {
            return apiGet("/helix/channel_points/custom_rewards", queryParams);
        },
        getCustomRewardRedemption: async (queryParams) => {
            return apiGet("/helix/channel_points/custom_rewards/redemptions", queryParams);
        },
        updateCustomReward: async (queryParams, bodyParams) => {
            return apiPatch("/helix/channel_points/custom_rewards", queryParams, bodyParams);
        },
        updateRedemptionStatus: async (queryParams, bodyParams) => {
            return apiPatch("/helix/channel_points/custom_rewards/redemptions", queryParams, bodyParams);
        }
    },

    clips: {
        createClip: async (queryParams) => {
            return apiPost("/helix/clips", queryParams, {});
        },
        getClips: async (queryParams) => {
            return apiGet("/helix/clips", queryParams);
        }
    },

    entitlements: {
        createEntitlementGrantsUploadURL: async (queryParams) => {
            return apiPost("/helix/entitlements/upload", queryParams, {});
        },
        getCodeStatus: async (queryParams) => {
            return apiGet("/helix/entitlements/codes", queryParams);
        },
        getDropsEntitlements: async (queryParams) => {
            return apiGet("/helix/entitlements/drops", queryParams);
        },
        redeemCode: async (queryParams) => {
            return apiPost("/helix/entitlements/code", queryParams, {});
        }
    },

    games: {
        getTopGames: async (queryParams) => {
            return apiGet("/helix/games/top", queryParams);
        },
        getGames: async (queryParams) => {
            return apiGet("/helix/games", queryParams);
        }
    },

    hypeTrain: {
        getHypeTrainEvents: async (queryParams) => {
            return apiGet("/helix/hypetrain/events", queryParams);
        }
    },

    moderation: {
        checkAutoModStatus: async (queryParams, bodyParams) => {
            return apiPost("/helix/moderation/enforcements/status", queryParams, bodyParams);
        },
        getBannedEvents: async (queryParams) => {
            return apiGet("/helix/moderation/banned/events", queryParams);
        },
        getBannedUsers: async (queryParams) => {
            return apiGet("/helix/moderation/banned", queryParams);
        },
        getModerators: async (queryParams) => {
            return apiGet("/helix/moderation/moderators", queryParams);
        },
        getModeratorEvents: async (queryParams) => {
            return apiGet("/helix/moderation/moderators/events", queryParams);
        }
    },

    search: {
        searchCategories: async (queryParams) => {
            return apiGet("/helix/search/categories", queryParams);
        },
        searchCategories: async (queryParams) => {
            return apiGet("/helix/search/channels", queryParams);
        }
    },

    streams: {
        getStreamKey: async (queryParams) => {
            return apiGet("/helix/streams/key", queryParams);
        },
        getStreams: async (queryParams) => {
            return apiGet("/helix/streams", queryParams);
        },
        createStreamMarker: async (bodyParams) => {
            return apiPost("/helix/streams/markers", {}, bodyParams);
        },
        getStreamMarkers: async (queryParams) => {
            return apiGet("/helix/streams/markers", queryParams);
        },
        getChannelInformation: async (queryParams) => {
            return apiGet("/helix/channels", queryParams);
        },
        modifyChannelInformation: async (queryParams, bodyParams) => {
            return apiPatch("/helix/channels", queryParams, bodyParams);
        }
    },

    subscriptions: {
        getBroadcasterSubscriptions: async (queryParams) => {
            return apiGet("/helix/subscriptions", queryParams);
        }
    },

    tags: {
        getAllStreamTags: async (queryParams) => {
            return apiGet("/helix/tags/streams", queryParams);
        },
        getStreamTags: async (queryParams) => {
            return apiGet("/helix/streams/tags", queryParams);
        },
        replaceStreamTags: async (queryParams, bodyParams) => {
            return apiPut("/helix/streams/tags", queryParams, bodyParams);
        }
    },

    users: {
        createUserFollows: async (queryParams) => {
            return apiPost("/helix/users/follows", queryParams, {});
        },
        deleteUserFollows: async (queryParams) => {
            return apiDelete("/helix/users/follows", queryParams, {});
        },
        getUsers: async (queryParams) => {
            return apiGet("/helix/users", queryParams);
        },
        getUsersFollows: async (queryParams) => {
            return apiGet("/helix/users/follows", queryParams);
        },
        updateUser: async (queryParams) => {
            return apiPut("/helix/users", queryParams, {});
        },
        getUserExtensions: async (queryParams) => {
            return apiGet("/helix/users/extensions/list", queryParams);
        },
        getUserActiveExtensions: async (queryParams) => {
            return apiGet("/helix/users/extensions", queryParams);
        },
        updateUserExtensions: async (bodyParams) => {
            return apiPut("/helix/users", {}, bodyParams);
        }
    },

    videos: {
        getVideos: async (queryParams) => {
            return apiGet("/helix/videos", queryParams);
        }
    },

    webhooks: {
        getWebhookSubscriptions: async (queryParams) => {
            return apiGet("/helix/webhooks/subscriptions", queryParams);
        }
    }
};