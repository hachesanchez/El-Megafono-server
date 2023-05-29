const { Schema, model } = require("mongoose")

const jobApplicationSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        jobOffer: {
            type: Schema.Types.ObjectId,
            ref: "JobOffer",
            required: true
        },
        applicationDate: {
            type: Date,
            default: Date.now
        },
        coverLetter: {
            type: String,
            required: [true, 'La carta de presentación es obligatoria.']
        },
        status: {
            type: String,
            enum: ["Pendiente", "Revisada", "Aprobada", "Rechazada"],
            default: "Pendiente"
        }
    },
    {
        timestamps: true
    }
)

const JobApplication = model("JobApplication", jobApplicationSchema)

module.exports = JobApplication