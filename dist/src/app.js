"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const cors = require('cors');
const Dataloader = require('dataloader');
const elasticsearch = require('elasticsearch');
const redis = require('redis');
const app = express_1.default();
const { logger } = require('./helper/logger');
var options = {
    explorer: true
};
const attribute_1 = tslib_1.__importDefault(require("./routes/attribute"));
const auth_1 = tslib_1.__importDefault(require("./routes/auth"));
const brand_1 = tslib_1.__importDefault(require("./routes/brand"));
const category_1 = tslib_1.__importDefault(require("./routes/category"));
const complain_1 = tslib_1.__importDefault(require("./routes/complain"));
const coupon_1 = tslib_1.__importDefault(require("./routes/coupon"));
const message_1 = tslib_1.__importDefault(require("./routes/message"));
const package_1 = tslib_1.__importDefault(require("./routes/package"));
const posts_1 = tslib_1.__importDefault(require("./routes/posts"));
const review_1 = tslib_1.__importDefault(require("./routes/review"));
const tag_1 = tslib_1.__importDefault(require("./routes/tag"));
const user_1 = tslib_1.__importDefault(require("./routes/user"));
app.use('/api/attribute', attribute_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/brand', brand_1.default);
app.use('/api/category', category_1.default);
app.use('/api/complain', complain_1.default);
app.use('/api/coupon', coupon_1.default);
app.use('/api/message', message_1.default);
app.use('/api/package', package_1.default);
app.use('/api/post', posts_1.default);
app.use('/api/review', review_1.default);
app.use('/api/tag', tag_1.default);
app.use('/api/user', user_1.default);
dotenv_1.default.config();
app.use(cors());
app.use(express_1.default.json());
app.use(body_parser_1.default.json({ type: 'application/*+json' }));
const { connection } = require('./database/connection');
connection();
const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});
const PORT = process.env.PORT || 3002;
app.use('/', (req, res, next) => {
    res.send({ message: 'Hello' });
});
const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
});
