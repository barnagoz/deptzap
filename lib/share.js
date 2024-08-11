export default function getShareText (selectedDept) {
    if (selectedDept.amount > 0) {
        return `Hey man! I owe you ${Math.abs(selectedDept.amount)} ${selectedDept.currency} for ${selectedDept.description} since ${new Date(selectedDept.date).toLocaleString()}. I saved it in my DeptZap app so I won't forget it.`;
    } else {
        return `Hey man! You owe me ${Math.abs(selectedDept.amount)} ${selectedDept.currency} for ${selectedDept.description} since ${new Date(selectedDept.date).toLocaleString()}. I saved it in my DeptZap app so I won't forget it. Don't forget to pay me back!`;
    }
}