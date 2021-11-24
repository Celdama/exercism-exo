/// <reference path="./global.d.ts" />
<<<<<<< HEAD



=======
>>>>>>> 7e3d7a9b14d1e46ea68da7f7e64c893eabde99a7
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
<<<<<<< HEAD



  free(text) {
    // console.log(response)

    return new Promise((resolve, reject) => {
      const response = this.api.fetch(text)



      if (response) {
        resolve(response)
      } else {
        reject("err")
      }
    })
    // return  new Promise((resolve, reject) => {
    //   if (text) {
    //     const translate = this.api.fetch(text)

    //     resolve(translate);
    //   } else {
    //     reject('error')
    //   }
    // })

  }





=======
  free(text) {
    return this.api.fetch(text).then((res) => res.translation);
  }

>>>>>>> 7e3d7a9b14d1e46ea68da7f7e64c893eabde99a7
  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
<<<<<<< HEAD
    throw new Error('Implement the batch function');
=======
    // throw new Error('Implement the batch function');
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map((text) => this.free(text)));
>>>>>>> 7e3d7a9b14d1e46ea68da7f7e64c893eabde99a7
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
<<<<<<< HEAD
    throw new Error('Implement the request function');
=======
    const req = () =>
      new Promise((resolve, reject) =>
        this.api.request(text, (error) =>
          error ? reject(error) : resolve(undefined)
        )
      );
    return req()
      .catch(() => req())
      .catch(() => req());
>>>>>>> 7e3d7a9b14d1e46ea68da7f7e64c893eabde99a7
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
<<<<<<< HEAD
    throw new Error('Implement the premium function');
=======
    return this.api
      .fetch(text)
      .catch(() => this.request(text).then(() => this.api.fetch(text)))
      .then((response) => {
        if (response.quality < minimumQuality)
          throw new QualityThresholdNotMet(text);
        return response.translation;
      });
>>>>>>> 7e3d7a9b14d1e46ea68da7f7e64c893eabde99a7
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
