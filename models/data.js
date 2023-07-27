const mongoose = require( 'mongoose' );

const dataSchema = new mongoose.Schema( {
    first_name: String,
    last_name: String,
    resume_name: String,
    level: String,
    profession: String,
    email: String,
    phone_number: Number,
    city: String,
    country: String,
    pincode: Number,
    github: String,
    twitter: String,
    linkedin: String,
    portfolio_link: String,
    languages: String,
    summary: String,
    accomplishment: String,
    education: [
        {
            education_id: {
                type: Number,
                default: 0
            },
            school_name: String,
            school_location: String,
            degree: String,
            field_of_study: String,
            degree_start_date: String,
            degree_end_date: String,
            current_attend_here: {
                type: Number,
                default: 0
            }
        },
        {
            education_id: {
                type: Number,
                default: 0
            },
            school_name: String,
            school_location: String,
            degree: String,
            field_of_study: String,
            degree_start_date: String,
            degree_end_date: String,
            current_attend_here: {
                type: Number,
                default: 0
            }
        },
        {
            education_id: {
                type: Number,
                default: 0
            },
            school_name: String,
            school_location: String,
            degree: String,
            field_of_study: String,
            degree_start_date: String,
            degree_end_date: String,
            current_attend_here: {
                type: Number,
                default: 0
            }
        }
    ],
    work_experience: [
        {
            work_id: {
                type: Number,
                default: 0
            },
            job_title: String,
            company_name: String,
            company_location: String,
            start_date: String,
            end_date: String,
            Description: String,
            currently_work_here: {
                type: Number,
                default: 0
            }
        },
        {
            work_id: {
                type: Number,
                default: 0
            },
            job_title: String,
            company_name: String,
            company_location: String,
            start_date: String,
            end_date: String,
            Description: String,
            currently_work_here: {
                type: Number,
                default: 0
            }
        }
    ],
    projects: [
        {
            project_id: {
                type: Number,
                default: 0
            },
            project_name: String,
            project_link: String,
            description: String
        },
        {
            project_id: {
                type: Number,
                default: 0
            },
            project_name: String,
            project_link: String,
            description: String
        }
    ],
    skills: [
        {
            skills_id: {
                type: Number,
                default: 0
            },
            top_technical_skills: String,
            technical_skills: String,
            non_technical_skills: String,
            softwares: String
        }
    ],
    certificates: [
        {
            certi_id: {
                type: Number,
                default: 0
            },
            certi_name: String,
            certi_link: String,
            certi_start_date: String,
            certi_end_date: String,
            currently_pursuing: {
                type: Number,
                default: 0
            }
        },
        {
            certi_id: {
                type: Number,
                default: 0
            },
            certi_name: String,
            certi_link: String,
            certi_start_date: String,
            certi_end_date: String,
            currently_pursuing: {
                type: Number,
                default: 0
            }
        }
    ]

} );

module.exports = mongoose.model( "Data", dataSchema );