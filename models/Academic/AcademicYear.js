const mongoose = require('mongoose')

const academicYearSchema = new mongoose.Schema({
    //Basic information
    name: {
        type: String,
        required: [true, "Academic year name is required"],
        trim: true,     
    },
    fromYear: {
        type: Date,
        required: [true, "Start date of the academic year is required"],
    },
    toYear: {
        type: Date,
        required: [true, "End date of the academic year is required"],          
    },
 isCurrent: {
     type: Boolean,
     default: false,
     required: [true, "Current academic year status is required"],  
 },

    //Realationships
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: [true, "Created by admin is required"],
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },  

    ],
    teachers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
    ],
}, { timestamps: true,
}
)

//Model
const AcademicYear = mongoose.model("AcademicYear", academicYearSchema)

module.exports = AcademicYear

