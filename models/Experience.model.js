const { Schema, model } = require("mongoose");

const experienceSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: [true, 'El título del puesto es obligatorio.']
        },
        organization: {
            type: String,
            required: [true, 'El nombre de la organización es obligatorio.']
        },
        startDate: {
            type: Date,
            required: [true, 'La fecha de inicio es obligatoria.']
        },
        endDate: {
            type: Date
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria.']
        }
    },
    {
        timestamps: true
    }
);

const Experience = model("Experience", experienceSchema);

module.exports = Experience;
