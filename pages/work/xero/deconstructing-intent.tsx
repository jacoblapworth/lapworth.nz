import { GetStaticProps, NextPage } from 'next'
import NextImage from 'next/image'
import { NextSeo } from 'next-seo'

import { Text } from '@/components/Typography'
import { images } from '@/components/Work/Xero'
import { styled } from '@/styles'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Deconstructing the intent of your design',
    },
  }
}

const Grid = styled('div', {
  display: 'grid',
  maxWidth: 1200,

  position: 'relative',
})

const Image = styled(NextImage, {
  maxWidth: '100%',
  height: 'auto',
})

Image.defaultProps = {
  placeholder: 'blur',
}

export default function Page() {
  return (
    <>
      <NextSeo noindex={true} />
      <Text as="h1" display size="large">
        Deconstructing the intent of your design
      </Text>

      <Grid>
        <p>
          When you bring a problem to the XUI team, one of the questions we’ll
          ask you is:
        </p>
        <q>Have you tried using just XUI?</q>
        <p>
          We’re not trying to be difficult, this is one of the ways that helps
          us understand your problem better, and why you’ve chosen to try other
          things. We’re not against you exploring new patterns, and in fact we
          want you to use your domain and customer knowledge to find the best
          experience for your users!
        </p>

        <p>
          Reconstructing a design using XUI, and the fundamentals, helps us
          identify the gaps in the current design system and evolve XUI in a
          sustainable way.
        </p>
        <h2>Intent in design</h2>
        <p>
          Design intent is how we <em>intend</em> to influence user behaviour
          through design. What does each element need to convey to the user?
          What do we want the user to understand? How should they interact with
          it?
        </p>
        <p>
          By being clear on the specific and individual problems we’re trying to
          solve, we can create and reuse consistent experiences across all of
          Xero. Creating consistency and predictability builds trust with our
          customers and means they can focus on the jobs they need to do.
        </p>
        <h2>What does using just XUI mean?</h2>
        <p>
          Using just XUI can be broken down into three steps:
          <ol>
            <li>Identify the different intents within the design</li>
            <li>Match intents in the design with XUI</li>
            <li>Reconstruct with XUI</li>
          </ol>
          To help understand how to to do this, we’ve put together a case study
          using a card style component.
        </p>
        <h2>Case study</h2>
        <p>
          At face value, these “cards” might seem like a reasonable usage of
          XUI. As we deconstruct the intent of these cards, let’s explore if
          there are any patterns in XUI that we can better align with.
        </p>
        <Image
          src={images.image1}
          alt="Example of cards
"
        />
        <h2>Identify the different intents within the design</h2>
        <p>
          What does each element need to convey to the user? What do we want the
          user to understand? How should they interact with it?
        </p>
        <p>
          In the example below, we can start to call out specific elements that
          mean things to a user, or encourage certain behaviour.
        </p>
        <Image
          src={images.image2}
          alt="Card example annotated with specific intents"
        />
        <h2>Match intents in the design with XUI</h2>
        <p>
          Use XUI as precedence for patterns in both visual language and
          interaction. You might find that XUI has a different or conflicting
          meaning for a similar pattern.
        </p>
        <h3>Sentiment</h3>
        <p>
          Where possible, try to reuse existing patterns to help reinforce
          concepts with users. The example below is a good example of using
          existing patterns. XUI has a side highlight that we use on alert
          components like banners and toasts to indicate negative and positive
          sentiment.
        </p>
        <Image
          src={images.image3}
          alt="The example has a negative sentiment highlight across card"
        />
        <Image
          src={images.image4}
          alt="XUI uses a negative sentiment across the left of toasts and banners"
        />
        <h3>Errors</h3>
        <p>
          There’s opportunities to either align, or differentiate ourselves from
          existing patterns. In the example below, we have a similar error
          message used in the XUI Text Input, although there are slight
          differences between the two designs:
        </p>
        <ul>
          <li>The text is all caps</li>
          <li>Triangular warning icon instead of circular invalid used</li>
        </ul>
        <p>
          These inconsistencies can be quite subtle, but if not intentionally
          thought about, can lessen the impact of existing patterns. From a
          user&apos;s perspective, they might question (even if subconsciously)
          the different icon (“does it mean something different?”) and these
          inconsistencies can break trust.
        </p>
        <Image
          src={images.image5}
          alt="The example card includes a warning message about being overdue."
        />
        <Image
          src={images.image6}
          alt="XUI uses an icon with red text on text inputs to highlight error messages."
        />
        <h3>Actions</h3>
        <p>
          Sometimes we may unintentionally design something that conflicts with
          existing patterns. The example below uses a full width red button as
          the primary call-to-action. XUI uses the colour red semantically to
          identify errors and destructive actions – this might not be what you
          want to convey when you’re asking users to prepare their tax return.
        </p>
        <p>
          XUI also uses backgrounds with rounded corners to identify primary
          buttons. It may not be obvious that the card footer is an action when
          it doesn’t “look” like a button within Xero.
        </p>
        <p>
          See{' '}
          <a href="https://twitter.com/LukeW/status/1002281609100378112">
            Luke Wroblewski on consistency in design
          </a>
          .
        </p>
        <Image
          src={images.image7}
          alt="The example card has a red footer for the primary action"
        />
        <Image
          src={images.image8}
          alt="XUI uses red to indicate negative, or destructive actions"
        />
        <h3>Content hierarchy & typographic scale</h3>
        <p>
          Sometimes, we might only identify issues when we place the component
          in surrounding contexts. Every designer at Xero has to consider how
          their work fits into the customer’s entire experience. What might it
          look like if these cards were surfaced in other experiences?
        </p>
        <p>
          Below, we’ve place the card in the dashboard, and you can see how some
          of the typography starts to create an imbalance in hierarchy.
        </p>

        <Image src={images.image9} alt="Card in-situ on the dashboard" />
        <p>
          To make sure your design works well with other parts of Xero, you can
          look to how we create hierarchy within our existing components. The
          Overview Block which is commonly used at the top of a page only uses
          xLarge type, but still manages to stand out.
        </p>
        <Image
          src={images.image10}
          alt="The example uses 2xlarge type to create hierarchy within the card
"
        />
        <Image
          src={images.image11}
          alt="XUI uses xlarge type in it’s Overview Block "
        />
        <h2>Reconstructing with XUI</h2>
        <p>
          Now that we’ve identified all of the intents and visual language we
          want to align with, we can reconstruct the card using XUI. You can see
          that there’s not just one way to use XUI.
        </p>
        <Image
          src={images.image12}
          alt="Two examples reconstructed using different interpretations of XUI"
        />
        <Image
          src={images.image13}
          alt="Other iterations that didn’t make the cut
"
        />
        <h2>Testing again in context</h2>
        <Image src={images.image14} alt="" />
        <h2>Identifying persisting problems</h2>
        <p>
          Once we’ve reconstructed the card, we can start to identify any gaps
          in XUI. What doesn’t work well in XUI? Is there still a lack of
          hierarchy? How can we make this the primary focus on the page?
        </p>

        <p>
          These are the types of questions that really help evolve XUI in a
          sustainable and responsible way. We love seeing this exploration, so
          please reach out to us on #xui-design with any questions.
        </p>
      </Grid>
    </>
  )
}
