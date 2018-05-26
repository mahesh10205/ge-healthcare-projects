
export class MenuInfo {

    id: string;

    label: string;

    selected: boolean;

    pos: number;

    constructor(id: string, label: string) {
        this.id = id;
        this.label = label;
    }
}