const Course = ({ course }) => {
    const total = course.parts.reduce((sum, parts) =>
        sum + parts.exercises, 0)

    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map((part, i) =>
                <p key={course.parts[i].id}>
                    {course.parts[i].name} {course.parts[i].exercises}
                </p>
            )
            }
            <p>
                Total of {total} exercises
            </p>
        </div>
    )
}

export default Course