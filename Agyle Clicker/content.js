function taskSelect() {
    try {
        // Get the start and end times for the current task from the task-date element
        let [startTimeString, endTimeString] = document.querySelector('.row.task-row-now .task-date').textContent.trim().split('-').map(time => time.trim());

        // Get the current time as a Date object
        const currentTime = new Date();

        // Function to convert a time string to a JS Date object
        function convertTimeStringToJSDate(timeString) {
            const [time, ampm] = timeString.split(" ");
            const [hours, minutes] = time.split(":");
            let hours24 = parseInt(hours);
            if (ampm === "PM" && hours24 !== 12) {
                hours24 += 12;
            }
            const date = new Date();
            date.setHours(hours24, parseInt(minutes), 0);
            return date;
        }

        // Convert the start and end times to JS Date objects
        let StartJsDate = convertTimeStringToJSDate(startTimeString);
        let EndJsDate = convertTimeStringToJSDate(endTimeString);

        // Get the text content of the task-name element
        const currentTaskText = document.querySelector(".row.task-row-now .task-row .task-name").textContent.trim();

        // Function to convert a task name to the format "task-[task_name_with_underscores]"
        function convertToTaskName(inputText) {
            return `task-${inputText.replace(/\s+/g, "_")}`;
        }

        // If the current time is between the start and end times of the task, select the task
        if (currentTime >= StartJsDate && currentTime <= EndJsDate) {
            const taskToClick = convertToTaskName(currentTaskText);
            document.getElementById(taskToClick).click();
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

taskSelect();

setInterval(taskSelect, 60000); // 60000 milliseconds = 1 minute