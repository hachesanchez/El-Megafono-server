const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    // CAMPOS COMUNES A LOS ROLES PROFESIONAL / ORGANIZACIÓN
    email: {
      type: String,
      required: [true, 'El email es obligatorio.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria.']
    },
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      minlength: [3, 'El nombre de usuario es demasiado corto']
    },
    role: {
      type: String,
      enum: ['PROFESIONAL', 'ORGANIZACIÓN', 'ADMIN'],
      required: [true, 'El rol es obligatorio.']
    },
    profileImage: {
      type: String,
      required: [true, 'La foto de perfil es obligatoria.']
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria.']
    },
    location: {
      type: String,
      required: [true, 'La localización es obligatoria.']
    },

    // CAMPOS ESPECÍFICOS PARA PROFESIONAL  
    jobCategory: {
      type: String,
      enum: ['Administración y finanzas', 'Atención directa', 'Comunicación y Marketing', 'Cooperación',
        'Dirección y coordinación', 'Gestión de proyectos', 'Legal', 'Diseño', 'Arquitectura', 'Ciencias de la salud',
        'Recursos humanos', 'Imagen y sonido', 'Tecnologías de la información (IT)', 'Traducción e interpretación'],
      required: [true, 'La categoría laboral es obligatoria.']
    },
    yearsOfExperience: {
      type: Number,
      required: [true, 'Los años de experiencia son obligatorios']
    },
    availability: {
      type: Boolean,
      default: true,
      required: [true, 'La disponibilidad para viajar es obligatoria.']
    },
    travelAvailability: {
      type: Boolean,
      default: false,
      required: [true, 'La disponibilidad para viajar es obligatoria.']
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
    skills: [{
      type: String,
      required: [true, 'Añadir skills es obligatorio.'],
      minlength: [1, 'Añadir por lo menos una 1 skill es obligatorio.'], // representa 1 palabra o 1 caracter?
      maxlength: [10, 'Se pueden añadir como máximo 10 skills.']
    }],
    dailyRate: {
      type: Number,
      required: [true, 'Añadir una tarifa diaria es obligatorio.']
    },
    grossSalary: {
      type: Number,
      required: [true, 'Añadir una salario anual deseado es obligatorio.']
    },
    experience: [{
      type: Schema.Types.ObjectId,
      ref: 'Experience'
    }],
    savedJobOffers: [{
      type: Schema.Types.ObjectId,
      ref: 'JobOffer'
    }],
    appliedJobOffers: [
      {
        job: {
          type: Schema.Types.ObjectId,
          ref: 'JobOffer'
        },
        applicationDate: {
          type: Date,
          default: Date.now
        }
      }
    ],

    // CAMPOS ESPECÍFICOS PARA ORGANIZACIÓN  
    favoriteProfessionals: [{
      type: Schema.Types.ObjectId,
      ref: 'User' // se puede referenciar el mismo modelo?
    }],
    publishedJobOffers: [{
      type: Schema.Types.ObjectId,
      ref: 'JobOffer'
    }],
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
