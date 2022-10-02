
/**
 * @param {number} inputSize
 */
var LUPrefix = function (inputSize) {
    this.uploadedVideos = new Array(inputSize).fill(false);
    this.longestUploadedPrefix = 0;
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
    this.uploadedVideos[video - 1] = true;
    while (this.longestUploadedPrefix < this.uploadedVideos.length && this.uploadedVideos[this.longestUploadedPrefix]) {
        ++this.longestUploadedPrefix;
    }
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
    return this.longestUploadedPrefix;
};
