import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "React - The Complete Guide" },
      { id: 2, title: "Understanding Typescript - 2020" },
      { id: 3, title: "Learn and Understand Node JS" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <Link
                key={course.id}
                to={{
                  pathname: `${this.props.match.url}/course/${course.id}`,
                  search: `?title=${course.title}`,
                }}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>
        <Route path={`${this.props.match.url}/course/:id`} component={Course} />
      </div>
    );
  }
}

export default Courses;
