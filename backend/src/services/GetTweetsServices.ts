import Twitter from 'twitter'

import '../lib/env'

interface ParamsDTO {
  tag: string
  count: number
}

interface TwitterDTO {
  id: number
  text: string
  user: {
    name: string
    profile_image_url: string
  }
}

class GetTweetsServices {
  public async execute({
    tag,
    count,
  }: ParamsDTO): Promise<Array<TwitterDTO> | null> {
    const { consumer_key, consumer_secret, bearer_token } = process.env
    if (consumer_key && consumer_secret && bearer_token) {
      const tw = new Twitter({
        consumer_key,
        consumer_secret,
        bearer_token,
      })

      const responseTwitter = await tw.get('search/tweets', {
        q: tag,
        count,
      })

      if (responseTwitter) {
        const tweet: Array<TwitterDTO> = []

        console.log(responseTwitter)
        for (const item of responseTwitter.statuses) {
          tweet.push({
            id: item.id,
            text: item.text,
            user: {
              name: item.user.name,
              profile_image_url: item.user.profile_image_url,
            },
          })
        }
        return tweet
      }
      return null
    }
    throw new Error('invalid credential')
  }
}

export default GetTweetsServices
