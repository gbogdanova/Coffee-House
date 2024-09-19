const truncateText = (str: string) => {
    if(str.length < 95) { return str; }

    return str.substring(0,95) + '...';
}
export default truncateText;