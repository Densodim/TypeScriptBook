type OptionsCopy = {
    from: string;
    to: string;
    overwrite: boolean;
}

type PartialOptionsCopy = Partial<typeof defaultOptions>

const defaultOptions: OptionsCopy = {
    from: "./src",
    to: "./dist",
    overwrite: true,
}

function copy(options: PartialOptionsCopy) {
    const allOptions = {...defaultOptions, ...options};
}

