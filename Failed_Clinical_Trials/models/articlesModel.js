const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    medicinalProduct: {
        type: String,
        required: true
    },
    therapeuticClass: {
        type: String,
        required: true
    },
    sponsor: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    phase: {
        type: String,
        required: true
    },
    interventions: [{
        type: String,
        required: true
    }],
    plannedEnrollment: {
        type: String,
        required: true
    },
    actualEnrollment: {
        type: String,
        required: true
    },
    failureNature: {
        type: String,
        required: true
    },
    clinicalTrialRegisters: [{
        type: String,
        required: true
    }],
    medicalLiterature: [{
        type: String,
        required: true
    }],
    mediaReports: [{
        type: String,
        required: true
    }],
});

const Article = mongoose.model('article', ArticleSchema, 'articles');

module.exports = Article;
