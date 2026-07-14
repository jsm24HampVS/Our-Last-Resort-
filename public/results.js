const profiles = [
    {
        username: "Kenneth",
        age: 28,
        compatibility: 2,
        music: "Classical",
        weekend: "Non-Fiction Documentaries",
        personality: "Highly organized",
        value: "Routine",
        bio: "Chill Guy, what can I say?",
        photo: "/images/Jacory.jpg",
       
    },
    {
        username: "Emma",
        age: 32,
        compatibility: 7,
        music: "Country",
        weekend: "Horseback riding",
        personality: "Traditional",
        value: "Stability",
        bio: "Looking for someone who enjoys peaceful mornings and quiet evenings.",
        photo: "/images/no pro.jpg",
    },
    {
        username: "Josh",
        age: 31,
        compatibility: -3,
        music: "Talk radio",
        weekend: "Budget planning",
        personality: "Extremely practical",
        value: "Efficiency",
        photo: "/images/man.jpg"
        
    },
    {
        username: "Tyrone (The Tax Guy)",
        age: 27,
        compatibility: 4,
        music: "Opera",
        weekend: "Reading financial reports",
        personality: "Serious",
        value: "Discipline",
        bio: "Organization is the key to happiness.",
        photo: "/images/man2.jpg"
    },
    {
        username: "Steve",
        age: 29,
        compatibility: 9,
        music: "Ambient",
        weekend: "Bird watching",
        personality: "Quiet",
        value: "Patience",
        photo: "/images/no pro.jpg"
    },
    {
        username: "Gregory",
        age: 45,
        compatibility: 1,
        music: "Easy listening",
        weekend: "Golf tournaments",
        personality: "Competitive",
        value: "Consistency",
        bio: "Rain or shine, I will be on the course.",
        photo: "/images/man.jpg"
    },
    {
        username: "Janice",
        age: 26,
        compatibility: 5,
        music: "Contemporary Folk",
        weekend: "Reading at the library",
        personality: "Reserved",
        value: "Knowledge",
        bio: "I have no reason to be here, but I am. I guess I just want to see what this is all about.",
        photo: "/images/women.jpg"
    },
    {
        username: "JAY",
        age: 24,
        compatibility: 0,
        music: "Rap",
        weekend: "Night life",
        personality: "Crashout",
        value: "C.R.E.A.M.",
        bio: "Use to pray for times like this, to rhyme like this. Now I'm in the limelight 'cause I rhyme like this.",
        photo: "/images/jayblur.jpg"
    

    }
];

const compatibilityScore = document.getElementById("compatibility-score");
const differenceScore = document.getElementById("difference-score");
const profileName = document.getElementById("profile-name");
const profileMessage = document.getElementById("profile-message");
const profilePhoto = document.getElementById("profile-photo");
const profileMusic = document.getElementById("profile-music");
const profileWeekend = document.getElementById("profile-weekend");
const profilePersonality = document.getElementById("profile-personality");
const profileValue = document.getElementById("profile-value");
const profileBio = document.getElementById("profile-bio");
const anotherMatchButton = document.getElementById("another-match-button");

function showRandomProfile() {
    const randomIndex = Math.floor(Math.random() * profiles.length);
    const selectedProfile = profiles[randomIndex];

    profileName.textContent =
        selectedProfile.username + ", " + selectedProfile.age;

    profileMusic.textContent = selectedProfile.music;
    profileWeekend.textContent = selectedProfile.weekend;
    profilePersonality.textContent = selectedProfile.personality;
    profileValue.textContent = selectedProfile.value;
    profileBio.textContent = selectedProfile.bio;
    profilePhoto.src = selectedProfile.photo;
    profilePhoto.alt = selectedProfile.username + " profile photo";

    profileMessage.textContent =
        "Our system successfully located someone with almost nothing in common with you.";

    compatibilityScore.textContent =
        selectedProfile.compatibility + "%";

    differenceScore.textContent =
        "Difference Score: " +
        (100 - selectedProfile.compatibility) +
        "%";
}

anotherMatchButton.addEventListener("click", function () {
    showRandomProfile();
});

showRandomProfile();