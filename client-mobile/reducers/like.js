import {
    SET_LIKES_LOADING,
    GET_FEED_LIKES,
    CREATE_FEED_LIKE,
    REMOVE_FEED_LIKE,
    FEED_LIKE_ERROR,
    GET_COMMENT_LIKES,
    CREATE_COMMENT_LIKE,
    REMOVE_COMMENT_LIKE,
    COMMENT_LIKE_ERROR,
    GET_REPLY_LIKES,
    CREATE_REPLY_LIKE,
    REMOVE_REPLY_LIKE,
    REPLY_LIKE_ERROR,
} from '../actions/types';

const initialState = {
    likeLoading: true,
    feedLikes: [],
    feedLikeError: null,
    commentLikes: [],
    commentLikeError: null,
    replyLikes: [],
    replyLikeError: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_LIKES_LOADING:
            return {
                ...state,
                likeLoading: true,
            };

        case GET_FEED_LIKES:
            return {
                ...state,
                likeLoading: false,
                feedLikes: payload,
            };

        case CREATE_FEED_LIKE:
            return {
                ...state,
                likeLoading: false,
                feedLikes: [payload, ...state.feedLikes],
            };

        case REMOVE_FEED_LIKE:
            return {
                ...state,
                likeLoading: false,
                feedLikes: state.feedLikes.filter((like) => like._id !== payload),
            };

        case FEED_LIKE_ERROR:
            return {
                ...state,
                likeLoading: false,
                feedLikeError: payload,
            };

        case GET_COMMENT_LIKES:
            return {
                ...state,
                likeLoading: false,
                commentLikes: payload,
            };

        case CREATE_COMMENT_LIKE:
            return {
                ...state,
                likeLoading: false,
                commentLikes: [payload, ...state.commentLikes],
            };

        case REMOVE_COMMENT_LIKE:
            return {
                ...state,
                likeLoading: false,
                commentLikes: state.commentLikes.filter((like) => like._id !== payload),
            };

        case COMMENT_LIKE_ERROR:
            return {
                ...state,
                likeLoading: false,
                commentLikeError: payload,
            };

        case GET_REPLY_LIKES:
            return {
                ...state,
                likeLoading: false,
                replyLikes: payload,
            };

        case CREATE_REPLY_LIKE:
            return {
                ...state,
                likeLoading: false,
                replyLikes: [payload, ...state.replyLikes],
            };

        case REMOVE_REPLY_LIKE:
            return {
                ...state,
                likeLoading: false,
                replyLikes: state.replyLikes.filter((like) => like._id !== payload),
            };

        case REPLY_LIKE_ERROR:
            return {
                ...state,
                likeLoading: false,
                replyLikeError: payload,
            };

        default:
            return state;
    }
};