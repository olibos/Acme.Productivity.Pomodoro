// <copyright file="UserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business.Concrete
{
    using Acme.Productivity.Pomodoro.Core;

    /// <summary>
    /// Manage all information about the user.
    /// </summary>
    public class UserDomain : IUserDomain
    {
        /// <inheritdoc />
        public AuthenticatedUser Authenticate(UserAuthentication authentication)
        {
            return new AuthenticatedUser
            {
                Name = authentication.UserName
            };
        }
    }
}