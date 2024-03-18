import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMoby = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.622 5.756q-.111.769-.133 1.547c.021.711.334 1.2.771 1.727.193.236.253.484.18.754-.086.334-.197.669-.321 1.007a3.07 3.07 0 0 0 .231 2.43q-.045.36.154.506.535.386.986.669a4.44 4.44 0 0 0 2.4 1.311q.032.007.03.034.001.023-.008.043-.018.034-.056.03a.25.25 0 0 0-.15.034 9 9 0 0 1-3.416-1.47l-.844-.582q-.265-.186-.317-.429a4.96 4.96 0 0 1 .673-3.913.146.146 0 0 0-.043-.206c-.72-.454-1.226-1.298-1.115-2.16.086-.668.129-1.397-.441-1.864q-.134-.114.034-.068.805.212 1.385.6"
          />
          <path
            fill="currentColor"
            d="M6.622 5.756q.907.431 1.165.96l.292.604a.2.2 0 0 0 .115.098.2.2 0 0 0 .15-.012 4.3 4.3 0 0 1 3.395-.348q.386.116-.013.185c-.964.163-1.2 1.123-1.809 1.718a2.75 2.75 0 0 1-1.873.772.15.15 0 0 0-.111.055c-.66.815-.973 1.736-.373 2.7.196.34.483.617.827.802 1.333.669 2.602.686 3.802.06q.557-.295 1.037-.703c1.157-.973 2.636-1.577 4.093-1.449q1 .083.523 1.123-1.857.493-2.915 1.526-.59.58-1.183 1.101a3 3 0 0 0-.484.528c-.257.364-.038 1.23.064 1.658a1.8 1.8 0 0 1-.055.763c-.343-.043-.54-.236-.6-.583a1.3 1.3 0 0 1 .03-.488c.073-.266.09-.849-.253-.947q-.336-.105-.506.042-.038-.096-.146-.077a2.9 2.9 0 0 1-1.088 0 .25.25 0 0 1 .154-.03c.022 0 .043-.008.052-.03a.1.1 0 0 0 .008-.043q0-.027-.026-.034a4.44 4.44 0 0 1-2.404-1.311c.93.244 1.886.313 2.854.214a.137.137 0 0 0 .125-.137q.001-.154-.133-.21a.4.4 0 0 0-.193-.017q-2.038.306-3.793-1.025a3.07 3.07 0 0 1-.231-2.43c.128-.338.231-.673.321-1.007.073-.27.013-.518-.18-.754-.433-.527-.75-1.016-.771-1.727-.009-.232.038-.75.133-1.547"
          />
          <path
            fill="currentColor"
            d="M15.013 8.134A1.03 1.03 0 0 0 16.05 7.11a1.03 1.03 0 0 0-1.037-1.02 1.03 1.03 0 0 0-1.037 1.02 1.03 1.03 0 0 0 1.037 1.024m-2.627 1.522c.154-.035.257-.176.227-.318-.034-.141-.189-.222-.343-.188-.158.034-.261.176-.231.317.034.137.188.223.343.189zm6.06.501c.227 0 .411-.18.411-.403a.41.41 0 0 0-.411-.403.407.407 0 0 0-.407.403.41.41 0 0 0 .407.407zm-.604 2.164a6 6 0 0 1-1.672 3.086q-.618.591-1.911 1.401c-.12.073-.429.185-.935.326-.102-.428-.325-1.294-.064-1.658.129-.18.287-.356.484-.528q.592-.521 1.183-1.101c.707-.686 1.676-1.2 2.915-1.526m-3.905 1.445a.286.286 0 0 0 .287-.283.284.284 0 0 0-.287-.283.286.286 0 0 0-.287.283c0 .154.129.283.287.283m-7.491.034.844.579a9 9 0 0 0 3.416 1.47c.381.064.741.064 1.088 0q.108-.026.146.072l-.193 1.312a3.46 3.46 0 0 1-1.684-.129c-.737-.257-1.586-.647-2.181-1.148a6 6 0 0 1-1.398-1.603q-.122-.218-.038-.557zm5.811.497c.163-.077.257-.214.21-.3-.043-.09-.21-.103-.368-.026-.159.073-.249.21-.206.3.043.086.21.103.369.026z"
          />
          <path
            fill="currentColor"
            d="M13.269 17.897c.03.257-.167.42-.403.33-.562-.214-.922-.403-1.119-.994l.193-1.312q.17-.146.506-.042c.343.098.326.685.253.942q-.065.25-.026.493.086.523.596.583m-7.406-.754a.64.64 0 0 0 .651-.643.647.647 0 0 0-.651-.643.643.643 0 0 0-.651.643.65.65 0 0 0 .651.643m11.533.325a.532.532 0 1 0 0-1.062c-.3 0-.54.235-.54.531 0 .291.24.531.54.531m-10.607.853c-.086.15-.047.33.085.403.129.073.305.013.39-.137.086-.146.048-.326-.085-.398-.129-.073-.305-.013-.386.132z"
          />
        </>
      ) : (
        <>
          <path
            fill="#6F83A2"
            d="M6.622 5.756q-.111.769-.133 1.547c.021.711.334 1.2.771 1.727.193.236.253.484.18.754-.086.334-.197.669-.321 1.007a3.07 3.07 0 0 0 .231 2.43q-.045.36.154.506.535.386.986.669a4.44 4.44 0 0 0 2.4 1.311q.032.007.03.034.001.023-.008.043-.018.034-.056.03a.25.25 0 0 0-.15.034 9 9 0 0 1-3.416-1.47l-.844-.582q-.265-.186-.317-.429a4.96 4.96 0 0 1 .673-3.913.146.146 0 0 0-.043-.206c-.72-.454-1.226-1.298-1.115-2.16.086-.668.129-1.397-.441-1.864q-.134-.114.034-.068.805.212 1.385.6"
          />
          <path
            fill="#89A2CC"
            d="M6.622 5.756q.907.431 1.165.96l.292.604a.2.2 0 0 0 .115.098.2.2 0 0 0 .15-.012 4.3 4.3 0 0 1 3.395-.348q.386.116-.013.185c-.964.163-1.2 1.123-1.809 1.718a2.75 2.75 0 0 1-1.873.772.15.15 0 0 0-.111.055c-.66.815-.973 1.736-.373 2.7.196.34.483.617.827.802 1.333.669 2.602.686 3.802.06q.557-.295 1.037-.703c1.157-.973 2.636-1.577 4.093-1.449q1 .083.523 1.123-1.857.493-2.915 1.526-.59.58-1.183 1.101a3 3 0 0 0-.484.528c-.257.364-.038 1.23.064 1.658a1.8 1.8 0 0 1-.055.763c-.343-.043-.54-.236-.6-.583a1.3 1.3 0 0 1 .03-.488c.073-.266.09-.849-.253-.947q-.336-.105-.506.042-.038-.096-.146-.077a2.9 2.9 0 0 1-1.088 0 .25.25 0 0 1 .154-.03c.022 0 .043-.008.052-.03a.1.1 0 0 0 .008-.043q0-.027-.026-.034a4.44 4.44 0 0 1-2.404-1.311c.93.244 1.886.313 2.854.214a.137.137 0 0 0 .125-.137q.001-.154-.133-.21a.4.4 0 0 0-.193-.017q-2.038.306-3.793-1.025a3.07 3.07 0 0 1-.231-2.43c.128-.338.231-.673.321-1.007.073-.27.013-.518-.18-.754-.433-.527-.75-1.016-.771-1.727-.009-.232.038-.75.133-1.547"
          />
          <path
            fill="#8DB6F7"
            d="M15.013 8.134A1.03 1.03 0 0 0 16.05 7.11a1.03 1.03 0 0 0-1.037-1.02 1.03 1.03 0 0 0-1.037 1.02 1.03 1.03 0 0 0 1.037 1.024m-2.627 1.522c.154-.035.257-.176.227-.318-.034-.141-.189-.222-.343-.188-.158.034-.261.176-.231.317.034.137.188.223.343.189zm6.06.501c.227 0 .411-.18.411-.403a.41.41 0 0 0-.411-.403.407.407 0 0 0-.407.403.41.41 0 0 0 .407.407z"
          />
          <path
            fill="#E1E4ED"
            d="M17.842 12.321a6 6 0 0 1-1.672 3.086q-.618.591-1.911 1.401c-.12.073-.429.185-.935.326-.102-.428-.325-1.294-.064-1.658.129-.18.287-.356.484-.528q.592-.521 1.183-1.101c.707-.686 1.676-1.2 2.915-1.526"
          />
          <path
            fill="#6F83A2"
            d="M13.937 13.766a.286.286 0 0 0 .287-.283.284.284 0 0 0-.287-.283.286.286 0 0 0-.287.283c0 .154.129.283.287.283"
          />
          <path
            fill="#E1E4ED"
            d="m6.446 13.8.844.579a9 9 0 0 0 3.416 1.47c.381.064.741.064 1.088 0q.108-.026.146.072l-.193 1.312a3.46 3.46 0 0 1-1.684-.129c-.737-.257-1.586-.647-2.181-1.148a6 6 0 0 1-1.398-1.603q-.122-.218-.038-.557z"
          />
          <path
            fill="#F8F8FA"
            d="M12.257 14.297c.163-.077.257-.214.21-.3-.043-.09-.21-.103-.368-.026-.159.073-.249.21-.206.3.043.086.21.103.369.026z"
          />
          <path
            fill="#6F83A2"
            d="M13.269 17.897c.03.257-.167.42-.403.33-.562-.214-.922-.403-1.119-.994l.193-1.312q.17-.146.506-.042c.343.098.326.685.253.942q-.065.25-.026.493.086.523.596.583"
          />
          <path
            fill="#8DB6F7"
            d="M5.863 17.143a.64.64 0 0 0 .651-.643.647.647 0 0 0-.651-.643.643.643 0 0 0-.651.643.65.65 0 0 0 .651.643m11.533.325a.532.532 0 1 0 0-1.062c-.3 0-.54.235-.54.531 0 .291.24.531.54.531m-10.607.853c-.086.15-.047.33.085.403.129.073.305.013.39-.137.086-.146.048-.326-.085-.398-.129-.073-.305-.013-.386.132z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMoby.displayName = 'Moby'

export default IconMoby
