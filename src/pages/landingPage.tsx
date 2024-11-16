import { Page } from '@/components/Page'
import { Button, Modal, Multiselect, Section } from '@telegram-apps/telegram-ui'
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types';
import { useState } from 'react'

const LandingPage = () => {

    const [interests, setInterests] = useState<MultiselectOption[]>([]);


  return (
    <Page>
        <Section style={{height: "100dvh"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5rem"}}>
                <h1 style={{fontSize: "1rem", fontFamily: "var(--tgui--font-family)", fontWeight: "500"}}>What are you most interested in learning right now?</h1>
            </div>
            <Multiselect
                header={"Interests"}
                title="Choose your options:"
                value={interests}

                options={[
                { label: 'English', value: 'english' },
                { label: 'Coding', value: 'coding' },
                { label: 'Math', value: 'math' },
                { label: 'AI', value: 'ai' },
                ]}

                onChange={(e: MultiselectOption[]) => setInterests(e)}
                >
            </Multiselect>
            <Button>Continue</Button>
        </Section>
    </Page>
  )
}

export default LandingPage