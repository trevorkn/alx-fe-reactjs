function UserProfile() {
    return (
        <div className="bg-gray-100 sm:p-4 md:p-8 max-w-sm max-w-sm mx-auto,my-20 rounded-lg shadow-lg" >
            <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto" />
            <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
            <p className="sm:text-sm md:text-base text-gray-600 text-base">Developer at Example Co. loves to write code and explore new technologies.</p>
            
        </div>
    );
}

export default UserProfile;