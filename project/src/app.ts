class ProjectManager {
    templateElement: HTMLTemplateElement;
    appElement: HTMLDivElement;
    formElement: HTMLFormElement;

    constructor() {
        console.log("2")
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.appElement = document.getElementById("app")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.attach()
    }

    private attach() {
        this.appElement.insertAdjacentElement("afterbegin", this.formElement)
    }
}

const run = new ProjectManager()