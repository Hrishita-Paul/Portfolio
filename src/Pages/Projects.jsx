import github_image from "../Components/github_image.jpeg";
import "./Projects.css"
export default function Projects() {
    return (
        <div className="projects-page">
            <div className="github">
            <p className="github-heading">My GitHub Profile</p>
            <img src={github_image} className="github-image" height={500} width={700} alt="github" />
            </div>
            <div className="projects">
            <p className="projects-heading">My Projects</p>
            <div class="project-wrap">
            <div class="card project-card" >
                <div className="card-body">
                    <h5 className="card-title project-heading">Central Library, NIT Silchar</h5><br />
                    <p className="card-text project-text">Problem Statement: This project was created to provide an efficient and user-friendly solution for managing the resources and services of a university's central library.<br />
                        User Perspective: The Central Library Management System is primarily designed for the library staff. They are the key users of the system and rely on it to efficiently manage library resources and student information.<br />
                        Functionality:<ol><li> Home Page: The home page serves as an introduction to the library, offering information about library timings, available functionalities, and lending services.
                        </li><li>Student Details Page: The Student Details page is designed to facilitate easy access to student information within the library system.</li>
                            <li>Book Issue page: It enables library staff to record and track books issued to students, including the due date for return.
                            </li></ol>
                            <p className="link"><a href="https://central-library-updated.vercel.app/">Deployed Project Link</a></p>

                    </p>
                    </div>
                    </div>
                    <div class="card project-card" >
                    <div className="card-body">
                    <h5 className="card-title project-heading">Waste Management System</h5><br />
                    <p className="card-text project-text">Problem Statement: The project is designed to address the waste management issues on the campus of the NIT, Silchar. The primary challenge was managing and reducing waste effectively within the campus.

                        <br />
                        User Perspective:
                        The primary users of this project include the teaching and non-teaching staff and students of NIT Silchar. They are responsible for reporting and categorizing waste found on campus.<br />

                        Functionality:
                        <ol><li>Collection of Waste Details:
                            Users, including students, teaching and non-teaching staff, can log into the platform and submit data about waste found at specific locations. They provide details such as the nature of waste, location, and additional relevant information.</li>
                            <li>
                                User Authentication:
                                To ensure data security, I've implemented password-based login for management authorities who can access and manage the waste data.</li>
                            <li>
                                 Nature of Waste Classification:
                                The project classifies waste into two categories - biodegradable and non-biodegradable - based on its nature. </li>
                        </ol>
                        <p className="link"><a href="https://waste-management-website-nine.vercel.app/">Deployed Project Link</a></p>
                    </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}