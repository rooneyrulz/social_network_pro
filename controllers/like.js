const { Post, Like, Comment, Reply } = require('../models');
const { getPost, getCommentById, getReplyByComment } = require('../helpers');

exports.getLikesByPost = async(req, res, next) => {
    const { post_id } = req.params;
    let likeList = [];
    if (req.isAuth) {
        try {
            const likes = await Like.find()
                .and([{ post: post_id }, { kind: 'post' }])
                .lean();
            for (const like of likes) {
                like.post = await getPost(like.post);
                likeList.push(like);
            }
            return res.status(200).json(likeList);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(401).send('Unauthorized!');
    }
};

exports.createLike = async(req, res, next) => {
    const { post_id } = req.params;

    if (req.isAuth) {
        try {
            const post = await Post.findById(post_id).lean();
            if (!post) return res.status(404).send('Post not found..');
            const isLiked = await Like.findOne()
                .and([{ post: post_id }, { owner: req.user }, { kind: 'post' }])
                .lean();
            if (isLiked) return res.status(400).send('Post has already been liked..');
            const like = await new Like({
                post: post_id,
                owner: req.user,
                kind: 'post',
            }).save();
            return res.status(201).json(like);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(401).send('Unauthorized!');
    }
};

exports.removeLike = async(req, res, next) => {
    const { post_id } = req.params;

    if (req.isAuth) {
        try {
            const post = await Post.findById(post_id).lean();
            if (!post) return res.status(404).send('Post not found..');
            const isLiked = await Like.findOne()
                .and([{ post: post_id }, { owner: req.user }, { kind: 'post' }])
                .lean();
            if (!isLiked)
                return res.status(400).send('Post has not already been liked..');
            const isUnliked = await Like.findByIdAndRemove(isLiked._id);
            return res.status(200).json(isUnliked);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(401).send('Unauthorized!');
    }
};

// COMMENT LIKE
exports.getLikesByComment = async(req, res, next) => {
    const { post_id, comment_id } = req.params;
    let likeList = [];
    try {
        const likes = await Like.find()
            .and([{ post: post_id }, { comment: comment_id }, { kind: 'comment' }])
            .lean();
        for (const like of likes) {
            like.post = await getPost(like.post);
            like.comment = await getCommentById(like.comment);
            likeList.push(like);
        }
        return res.status(200).json(likes);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.createLikeOnComment = async(req, res, next) => {
    const { post_id, comment_id } = req.params;

    try {
        const comment = await Comment.findById(comment_id).lean();
        if (!comment) return res.status(404).send('Comment not found..');
        const isLiked = await Like.findOne()
            .and([
                { post: post_id },
                { comment: comment_id },
                { owner: req.user },
                { kind: 'comment' },
            ])
            .lean();
        if (isLiked)
            return res.status(400).send('Comment has already been liked..');
        const like = await new Like({
            post: post_id,
            comment: comment_id,
            owner: req.user,
            kind: 'comment',
        }).save();
        return res.status(201).json(like);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.removeLikeOnComment = async(req, res, next) => {
    const { post_id, comment_id } = req.params;

    try {
        const comment = await Comment.findById(comment_id).lean();
        if (!comment) return res.status(404).send('Comment not found..');
        const isLiked = await Like.findOne()
            .and([
                { post: post_id },
                { comment: comment_id },
                { owner: req.user },
                { kind: 'comment' },
            ])
            .lean();
        if (!isLiked)
            return res.status(400).send('Comment has not already been liked..');
        const isUnliked = await Like.findByIdAndRemove(isLiked._id);
        return res.status(200).json(isUnliked);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// GET ALL LIKES BY REPLY
exports.getLikesByReply = async(req, res, next) => {
    const { post_id, comment_id, reply_id } = req.params;
    let likeList = [];
    try {
        const likes = await Like.find()
            .and([
                { post: post_id },
                { comment: comment_id },
                { reply: reply_id },
                { kind: 'reply' },
            ])
            .lean();
        for (const like of likes) {
            like.post = await getPost(like.post);
            like.comment = await getCommentById(like.comment);
            like.reply = await getReplyByComment(like.post, like.comment, like.reply);
            likeList.push(like);
        }
        return res.status(200).json(likes);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.createLikeOnReply = async(req, res, next) => {
    const { post_id, comment_id, reply_id } = req.params;

    try {
        const reply = await Reply.findById(reply_id).lean();
        if (!reply) return res.status(404).send('Reply not found..');
        const isLiked = await Like.findOne()
            .and([
                { post: post_id },
                { comment: comment_id },
                { reply: reply_id },
                { owner: req.user },
                { kind: 'reply' },
            ])
            .lean();
        if (isLiked) return res.status(400).send('Reply has already been liked..');
        const like = await new Like({
            post: post_id,
            comment: comment_id,
            reply: reply_id,
            owner: req.user,
            kind: 'reply',
        }).save();
        return res.status(201).json(like);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.removeLikeOnReply = async(req, res, next) => {
    const { post_id, comment_id, reply_id } = req.params;

    try {
        const reply = await Reply.findById(reply_id).lean();
        if (!reply) return res.status(404).send('Reply not found..');
        const isLiked = await Like.findOne()
            .and([
                { post: post_id },
                { comment: comment_id },
                { reply: reply_id },
                { owner: req.user },
                { kind: 'reply' },
            ])
            .lean();
        if (!isLiked)
            return res.status(400).send('Reply has not already been liked..');
        const isUnliked = await Like.findByIdAndRemove(isLiked._id);
        return res.status(200).json(isUnliked);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};