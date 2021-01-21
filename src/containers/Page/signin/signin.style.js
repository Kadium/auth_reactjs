import styled from 'styled-components';
import {palette} from 'styled-theme';
import bgImage from '../../../image/image/background4.png';
import WithDirection from '../../../settings/withDirection';

const SignInStyleWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  padding-top: 50px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #ffffff;
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
  }

  .isoLoginContentWrapper {
    width: 700px;
    height: 900px;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .isoLoginContent {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 70px 50px;
    position: relative;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 50px;
      justify-content: center;
      flex-shrink: 0;

      a {
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
        color: ${palette('secondary', 2)};
      }
      
      img  {
        width: 70%;
          margin-left: auto;
          margin-right: auto;
          display: block;
      }
    }

    .isoImage {
      background: url(${bgImage}) no-repeat center center;
      width: 400px;
      padding: 10px 10px;
      
      @media only screen and (max-width: 767px) {
      width: 100%;
    }
    }

    .isoSignInForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .isoInputWrapper {
        margin-bottom: 15px;

        &:last-of-type {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &:-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &::-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette('grayscale', 0)};
          }
        }
      }

      .isoHelperText {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        color: ${palette('grayscale', 1)};
        padding-left: ${props =>
    props['data-rtl'] === 'rtl' ? 'inherit' : '13px'};
        padding-right: ${props =>
    props['data-rtl'] === 'rtl' ? '13px' : 'inherit'};
        margin: 15px 0;
        position: relative;
        display: flex;
        align-items: center;

        &:before {
          content: '*';
          color: ${palette('error', 0)};
          padding-right: 3px;
          font-size: 14px;
          line-height: 1;
          position: absolute;
          top: 2px;
          left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
          right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
        }
      }

      .isoHelperWrapper {
        margin-top: 35px;
        flex-direction: column;
      }

      .isoOtherLogin {
        padding-top: 40px;
        margin-top: 35px;
        border-top: 1px dashed ${palette('grayscale', 2)};

        > a {
          display: flex;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .isoLeftRightComponent {
                input {
                  width: calc(100% - 10px);
        
                  &:first-child {
                    margin-right: ${props =>
    props['data-rtl'] === 'rtl' ? 'inherit' : '20px'};
                    margin-left: ${props =>
    props['data-rtl'] === 'rtl' ? '20px' : 'inherit'};
                  }
                }
              }

        button {
          width: 100%;
          height: 42px;
          font-weight: 500;

          &.btnProduct {

            &:hover {
              background-color: darken(#3b5998, 5%);
            }
          }

          &.btnOwner {
            margin-top: 15px;

            &:hover {
              background-color: darken(#dd4b39, 5%);
            }
          }

          &.btnAuthZero {
            background-color: #e14615;
            margin-top: 15px;

            &:hover {
              background-color: darken(#e14615, 5%);
            }
          }

          &.btnFirebase {
            background-color: ${palette('color', 5)};
            margin-top: 15px;

            &:hover {
              background-color: ${palette('color', 6)};
            }
          }
        }
      }

      .isoForgotPass {
        font-size: 12px;
        color: ${palette('text', 3)};
        margin-top: 10px;
        text-decoration: none;

        &:hover {
          color: ${palette('primary', 0)};
        }
      }

      button {
        font-weight: 500;
      }
    }
  }
  
   .spanLogin {
    color: #000;
    font-size: 1.1em;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top: 20px;
     margin-bottom: 30px;
  }
  .spanNotMember {
    color: #000;
    font-size: 1.1em;
  }
  
  .isoHeader {
      font-size: 1.1em;
      text-align: center;
      color: #2865E7;
      font-weight: 400;
      margin-bottom: 20px;
  }
`;

export default WithDirection(SignInStyleWrapper);
