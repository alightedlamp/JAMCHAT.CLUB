import mongoose, { Schema } from 'mongoose'

const jamSchema = Schema({
  created_by: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  open: {
    type: Boolean,
    default: true,
  },
  bpm: {
    type: Number,
    default: 120,
  },
  users: {
    type: Array,
    maxItems: 4,
    description: 'Only four members can jam at a time',
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  contributors: {
    type: Array,
  },
})

export default mongoose.model('Jam', jamSchema)
