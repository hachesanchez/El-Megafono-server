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
    },
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      minlength: [3, 'El nombre de usuario es demasiado corto']
    },
    role: {
      type: String,
      enum: ['PROFESIONAL', 'ORGANIZACIÓN', 'ADMIN'],
      required: [true, 'El rol es obligatorio.'],
      default: 'PROFESIONAL'
    },
    avatar: {
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
      enum: jobCategoryOptions,
    },
    yearsOfExperience: {
      type: Number,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    travelAvailability: {
      type: Boolean,
      default: false,
    },
    languages: [{
      name: {
        type: String,
      },
      level: {
        type: String,
        enum: ['Principiante', 'Básico profesional', 'Avanzado', 'Bilingüe o nativo'],
      }
    }],
    skills: {
      type: [String],
      // validate: {
      //   validator: value => value.length >= 3,
      //   message: 'Incluye un mínimo de tres skills'
      // }
    },
    dailyRate: {
      type: Number,
    },
    grossSalary: {
      type: Number,
    },
    experience: [{
      type: Schema.Types.ObjectId,
      ref: 'Experience'
    }],
    savedJob: [{
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }],


    // CAMPOS ESPECÍFICOS PARA ORGANIZACIÓN  
    favoriteProfessionals: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],

  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
