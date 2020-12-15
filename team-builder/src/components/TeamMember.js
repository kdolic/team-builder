import React from 'react'

export default function TeamMember(props) {
    const { memberInfo } = props

    if (!memberInfo) {
        return <h3> Working on fetching your team member&apos;s information...</h3>
    }

    return (
        <div>
            <h2>{memberInfo.fname} {memberInfo.lname}</h2>
            <p>E-Mail: {memberInfo.email}</p>
            <p>Role: {memberInfo.role}</p>
        </div>
    )
}
