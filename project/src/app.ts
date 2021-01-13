class ProjectManager {
    templateElement: HTMLTemplateElement;
    appElement: HTMLDivElement;
    formElement: HTMLFormElement;
    inputTitle: HTMLInputElement;
    inputDescription: HTMLInputElement;
    inputNumber: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.appElement = document.getElementById("app")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.formElement.id = "user-input"
        this.submitButton()
        this.attach()
        this.inputTitle = document.getElementById("title") as HTMLInputElement;
        this.inputDescription = document.getElementById("description") as HTMLInputElement;
        this.inputNumber = document.getElementById("people") as HTMLInputElement;
    }

    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.inputTitle.value)
    }

    private attach() {
        this.appElement.insertAdjacentElement("afterbegin", this.formElement)
    }
    private submitButton() {
        this.formElement.addEventListener("submit", this.submitHandler.bind(this))
    }
}

const run = new ProjectManager()