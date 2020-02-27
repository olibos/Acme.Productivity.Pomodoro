// <copyright file="UserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using System.Linq;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data;

    /// <summary>
    /// Manage all information about the user.
    /// </summary>
    public class UserDomain
    {
        private readonly IUserRepository _userRepository;

        /// <summary>
        /// Creates a new instance of the user repository.
        /// </summary>
        /// <param name="userRepository"></param>
        public UserDomain(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="authentication">The authentication informations.</param>
        /// <returns>The user or null if not authenticated.</returns>
        public async Task<AuthenticatedUser> AuthenticateAsync([NotNull] UserAuthentication authentication)
        {
            return await this._userRepository.AuthenticateAsync(authentication.UserName, authentication.Password);
        }
    }
}