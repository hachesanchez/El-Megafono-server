const { Schema, model } = require("mongoose");

const jobOfferSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'La contraseña es obligatoria.']
        },
        description: {
            type: String,
            required: [true, 'La descripción del puesto ofertado es obligatoria.']
        },
        jobCategory: {
            type: String,
            enum: ['Administración y finanzas', 'Atención directa', 'Comunicación y Marketing', 'Cooperación',
                'Dirección y coordinación', 'Gestión de proyectos', 'Legal', 'Diseño', 'Arquitectura', 'Ciencias de la salud', 'Recursos humanos',
                'Imagen y sonido', 'Tecnologías de la información (IT)', 'Traducción e interpretación'],
            required: [true, 'La categoría laboral es obligatoria.']
        },
        yearsOfExperience: {
            type: Number,
            required: [true, 'Los años de experiencia son obligatorios']
        },
        grossSalary: {
            type: Number,
            required: [true, 'Añadir una salario anual deseado es obligatorio.']
        },
        location: {
            type: String,
            required: [true, 'La localización es obligatoria.']
        },
        travelAvailability: {
            type: Boolean,
            default: false,
            required: [true, 'La disponibilidad para viajar es obligatoria.']
        },
        remoteJob: {
            type: Boolean,
            default: false,
            required: [true, 'La opción de trabajo remoto es obligatoria.']
        },
        isFilled: {
            type: Boolean,
            default: false,
        },
        laguages: [{
            language: {
                type: String,
                required: [true, 'El idioma es obligatorio.']
            },
            level: {
                type: String,
                enum: ['Principiante', 'Básico profesional', 'Avanzado', 'Bilingüe o nativo'],
                required: [true, 'El nivel es obligatorio.']
            }
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        applicants: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    },
    {
        timestamps: true
    }
);

const JobOffer = model("JobOffer", jobOfferSchema);

module.exports = JobOffer;
