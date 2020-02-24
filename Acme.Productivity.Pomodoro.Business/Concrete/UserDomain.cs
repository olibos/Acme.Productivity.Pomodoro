// <copyright file="UserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business.Concrete
{
    using System;

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
                Id = Guid.NewGuid(),
                Name = authentication.UserName
            };
        }
    }
}