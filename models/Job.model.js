const { Schema, model } = require("mongoose");

const jobCategoryOptions = [
    'Administración y finanzas',
    'Atención directa',
    'Comunicación y Marketing',
    'Cooperación',
    'Dirección y coordinación',
    'Gestión de proyectos',
    'Legal',
    'Diseño',
    'Arquitectura',
    'Ciencias de la salud',
    'Recursos humanos',
    'Imagen y sonido',
    'Tecnologías de la información (IT)',
    'Traducción e interpretación'
];

const jobSchema = new Schema(
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
            enum: jobCategoryOptions,
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
        startDate: {
            type: Date,
            required: [true, 'La fecha de inicio es obligatoria.']
        },
        contract: {
            type: String,
            enum: ['Indefinido', 'Por obra y servicio', 'Autónoma/o'],
            required: [true, 'El tipo de contrato es obligatorio.']
        },
        languages: [{
            name: {
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

const Job = model("Job", jobSchema);

module.exports = Job;
