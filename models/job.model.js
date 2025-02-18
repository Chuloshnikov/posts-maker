import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobTitle: { 
        type: String, 
        required: [true, 'Job Title is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    description: { 
        type: String, 
        required: [true, 'Job Description is required'],
        trim: true,
    },
    jobUrl: {
        type: String,
        required: [true, 'Job URL is required'],
        trim: true,
        match: [/^https?:\/\/.+/, 'Please enter a valid URL'],
    },
    location: { type: String, trim: true },
    language: { type: String, trim: true },
    workType: { type: String, trim: true },
    jobTime: { type: String, trim: true },
    salary: { 
        type: Number, 
        min: [0, 'Salary must be a positive number'],
    },
    salaryLabel: { type: String, trim: true },
    currency: { type: String, trim: true },
    salaryDetail: { type: String, trim: true },
    advertisedDate: { type: String, trim: true },
    postedDate: { type: String, trim: true },
    closeDate: { type: String, trim: true },
    education: { type: String, trim: true },
    companyDetails: {
        ceoCompany: { type: String, trim: true },
        founded: { type: String, trim: true },
        companySize: { type: String, trim: true },
        companyWebsite: {
            type: String,
            trim: true,
            match: [/^https?:\/\/.+/, 'Please enter a valid URL'],
        },
    },
    views: { 
        type: Number, 
        default: 0, 
        min: [0, 'Views must be a positive number'],
    },
    jobPostAuthorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, 'Job Post Author ID is required'],
        ref: 'User',
    },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

export default Job;
