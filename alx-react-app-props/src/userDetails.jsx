
function userDetails({userDetails}) {
    return (
        <div>
            <p>Name: {userDetails.Name}</p>
            <p>Email: {userDetails.email}</p>
        </div>
    )
}

export default userDetails;