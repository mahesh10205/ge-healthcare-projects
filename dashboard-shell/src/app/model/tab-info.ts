

export class TabInfo {



    id: string;

    label: string;

    show: boolean = false;

    content: any;

    pos: number;

    constructor(id: string, label: string, content: any) {

        this.id = id;

        this.label = label;

        this.content = content;

    }

}